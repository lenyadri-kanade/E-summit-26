import { useInView } from "react-intersection-observer";

import "./ticket.css"; // styles below
import { useRouter } from "next/navigation";
import { FaTicket } from "react-icons/fa6";

export default function ScrollTicket() {
  const router = useRouter();
  // useInView: tells us if target is on screen
  const { ref, inView } = useInView({
    threshold: 0.3, // 30% visible
    triggerOnce: true, // show only once
  });

  return (
    <>
      {/* Invisible trigger element somewhere in page */}
      <div ref={ref} style={{ height: "1px" }}></div>

      {/* Show ticket once trigger is in view */}
      {inView && (
        <div
          className={`ticket-fixed ticket-expand `}
          onClick={() => router.replace("/payment?type=esummit")}
        >
          <FaTicket size={28} className="rotate_by_90" />
          <span className="rotate_text font-bold text-[2px]">PASSES</span>
        </div>
      )}
    </>
  );
}
