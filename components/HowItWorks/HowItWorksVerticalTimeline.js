"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineSteps } from "./HowItWorksData";

export default function HowItWorksTimeline() {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black py-20 px-5 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-[1350px] mx-auto">
        {/* Vertical Timeline */}
        <VerticalTimeline lineColor="#3b82f64d">
          {timelineSteps.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#ffffff0d",
                  backdropFilter: "blur(20px)",
                  border: "1px solid #3b82f64d",
                  borderRadius: "24px",
                  boxShadow: "0 8px 32px #0000004d",
                  padding: "2rem",
                }}
                contentArrowStyle={{
                  borderRight: isLeft
                    ? "7px solid #ffffff1a"
                    : "7px solid #ffffff1a",
                  borderLeft: !isLeft ? "7px solid #ffffff1a" : "none",
                }}
                iconStyle={{
                  background: item.iconBg,
                  boxShadow: `0 0 30px ${item.iconBg}`,
                }}
                icon={<Icon className="w-6 h-6 text-white" strokeWidth={2.5} />}
              >
                {/* Step Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-400">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Pro Tip */}
                <div className="my-2 p-3 bg-white/5 border border-blue-500/20 rounded-xl pt-0">
                  <p className=" text-gray-400" style={{fontSize: "12px"}}>{item.proTip}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => {
                    const TagIcon = tag.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-blue-500/30 rounded-lg hover:bg-white/10 transition-colors duration-300"
                      >
                        <TagIcon
                          className="w-4 h-4 text-blue-400"
                          strokeWidth={2.5}
                        />
                        <span className="text-xs sm:text-sm font-medium text-gray-300">
                          {tag.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-4 rotate-45 flex gap-2 opacity-20">
                  <div
                    className={`w-2 h-2 rounded-full bg-linear-to-r ${item.color}`}
                  />
                  <div
                    className={`w-2 h-2 rounded-full bg-linear-to-r ${item.color}`}
                  />
                  <div
                    className={`w-2 h-2 rounded-full bg-linear-to-r ${item.color}`}
                  />
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .vertical-timeline::before {
          background: linear-gradient(
            to bottom,
            #3b82f64d,
            #9333ea4d
          ) !important;
        }

        .vertical-timeline-element-content {
          position: relative;
          overflow: hidden;
        }

        .vertical-timeline-element-content::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #3b82f64d, #9333ea4d);
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .vertical-timeline-element-content:hover::before {
          opacity: 1;
        }

        .vertical-timeline-element-icon {
          border: 3px solid #3b82f64d !important;
        }

        @media (max-width: 1169px) {
          .vertical-timeline-element-content {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
