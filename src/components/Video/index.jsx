import { cn } from "@/lib/utils";
import {
  useVideoTrack,
  DailyVideo,
} from "@daily-co/daily-react";
import Image from "next/image";
const ProfileImage = "/images/ProfileImage.png";

export const Video = ({ id, className, topClassname, getUserMediaError }) => {
  const videoState = useVideoTrack(id);
  return !videoState?.isOff ? (
    <div
      className={cn(
        "w-full mx-auto flex items-center  pt-200 justify-center",
        topClassname
      )}
    >
      <DailyVideo
        automirror
        sessionId={id}
        type="video"
        className={cn(
          "h-auto bg-[#191921] rounded-md",
          className,
          {
            hidden: videoState.isOff,
          }
        )}
      />
    </div>
    
  ) : (
     <div className="w-full mx-auto flex items-center h-[650px]  justify-center">
      <div className="h-[500px] w-[800px] bg-[#191921] rounded-md mx-auto flex items-center justify-center">
      {!getUserMediaError ? <Image
          src={ProfileImage}
          alt="ProfileImage"
          width={200}
          height={200}
        /> : <h2 className="text-white">Camera is off </h2>}
      </div>
    </div>
  );
};
