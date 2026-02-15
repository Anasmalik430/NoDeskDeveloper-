"use client";
import { API_BASE } from '@/lib/api';
import { createContext, useState, useEffect, useContext, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Fetch User Function (Cookie based)
  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);
      // 'credentials: include' is must for HttpOnly cookies
      const response = await fetch(`${API_BASE}/me`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Auth Error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // 2. Initial check on mount
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  // 3. Login Helper (Sirf state refresh karega, cookie backend set kar chuka hai)
  const login = () => {
    fetchCurrentUser();
  };

  // 4. Logout Helper
  const logout = async () => {
    try {
      const response = await fetch(`${API_BASE}/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      if (response.ok) {
        setUser(null);
        window.location.href = "/auth/login"; // Redirect after logout
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAdmin: user?.role === 'admin',
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};