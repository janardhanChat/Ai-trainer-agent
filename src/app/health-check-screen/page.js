"use client";
import { useEffect, useState } from "react";
import { DailyProvider, useDaily } from "@daily-co/daily-react";
import { useLocalSessionId } from "@daily-co/daily-react";
import { CameraSettings } from "@/components/sections/CameraSetting";
import { Video } from "@/components/Video";
import { useConversation } from "@/contexts/ConversationContext";

export default function page() {
  const localSessionId = useLocalSessionId();
  const daily = useDaily();
  const { handleEnd, handleJoin, loading } = useConversation();
  const [getUserMediaError, setGetUserMediaError] = useState(false);
  useEffect(() => {
    if (daily) {
      daily?.startCamera({ startVideoOff: false, startAudioOff: false });
    }
  }, [daily, localSessionId]);

  return (
    <div className="bg-[#0F0F0F] h-screen">
      <Video
        id={localSessionId}
        className="max-h-[60vh] "
        topClassname={"h-[650px]"}
        getUserMediaError={getUserMediaError}
      />
      <CameraSettings
        actionLabel="Join Call"
        onAction={handleJoin}
        cancelLabel="Cancel"
        onCancel={handleEnd}
        getUserMediaError={getUserMediaError}
        setGetUserMediaError={setGetUserMediaError}
      />
    </div>
  );
}
