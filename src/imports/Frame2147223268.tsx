import svgPaths from "./svg-q5vn8zddsc";

function IcRoundVpnKey() {
  return (
    <div className="h-[32.2px] relative shrink-0 w-[58.8px]" data-name="ic:round-vpn-key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.8 32.2">
        <g clipPath="url(#clip0_1_6192)" id="ic:round-vpn-key">
          <path d={svgPaths.p2d82c130} fill="var(--fill-0, #02A9F7)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_1_6192">
            <rect fill="white" height="32.2" width="58.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full">
      <IcRoundVpnKey />
      <p className="css-ew64yg font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#02a9f7] text-[20.743px]">
        <span className="leading-[normal]">Blue</span>
        <span className="leading-[normal] text-white">VPN</span>
      </p>
    </div>
  );
}