import { useCallback, useEffect } from "react";
import {
  useDevices,
  useDaily,
  useDailyEvent,
  useLocalSessionId,
  useVideoTrack,
  useAudioTrack,
} from "@daily-co/daily-react";
import { Button } from "../ui/button";
import { Mic, Video, Volume2, VideoOff, VideoIcon, MicOff } from "lucide-react";
import SelectDevice from "./SelectDevice";
import toast from "react-hot-toast";


export const CameraSettings = ({
  actionLabel,
  onAction,
  cancelLabel,
  onCancel,
}) => {
  const daily = useDaily();
  const {
    currentCam,
    currentMic,
    currentSpeaker,
    microphones,
    speakers,
    cameras,
    setMicrophone,
    setCamera,
    setSpeaker,
    refreshDevices,
    getUserMediaError,
    setGetUserMediaError,
  } = useDevices();
  const localSessionId = useLocalSessionId();
  const localVideo = useVideoTrack(localSessionId);
  const localAudio = useAudioTrack(localSessionId);
  const isCameraEnabled = !localVideo.isOff;
  const isMicEnabled = !localAudio.isOff;
  let isLoaded = false;

  useEffect(() => {
    if (!isLoaded) {
      if (!currentCam) {
        toast.error("No camera detected. Please connect a camera to continue.");
      }
      if (!currentMic) {
        toast.error("No microphone detected. Please connect a microphone to continue.");
      }
      isLoaded = true;
    }
  }, []);

  useDailyEvent(
    "camera-error",
    useCallback((error) => {
      console.log("camera error", error.error.missingMedia);
      setGetUserMediaError(true);
    }, [])
  );

  const toggleCamera = () => {
    daily?.setLocalVideo(!isCameraEnabled);
  };

  const toggleMicrophone = () => {
    daily?.setLocalAudio(!isMicEnabled);
  };

  return (
    <div className="mt-10 relative w-full max-w-screen-md flex flex-col items-center justify-center mx-auto">
      <div className="flex items-center justify-center">
        {getUserMediaError && (
          <button
            onClick={() => {
              refreshDevices();
            }}
            className="px-6 py-2 rounded-button bg-primary text-slate-50"
          >
            Turn on Camera & Microphone
          </button>
        )}

        {!getUserMediaError && (
          <div className="flex items-center justify-end gap-2">
            <div className="flex items-center justify-center me-5">
              <button
                onClick={toggleCamera}
                className={`p-2.5 rounded-full text-slate-50 ${isCameraEnabled ? 'bg-green-600' : 'bg-red-600'
                  } me-2`}
              >
                {isCameraEnabled ? (
                  <VideoIcon className="size-5 " />
                ) : (
                  <VideoOff className="size-5" />
                )}
              </button>
              <SelectDevice
                value={currentCam?.device?.deviceId}
                devices={cameras}
                onChange={(val) => setCamera(val)}
                Icon={Video}
              />
            </div>
            <div className="flex items-center justify-center me-5">
              <button
                onClick={toggleMicrophone}
                className={`p-2.5 rounded-full text-slate-50 ${isMicEnabled ? 'bg-green-600' : 'bg-red-600'
                  } me-2`}
              >
                {isMicEnabled ? (
                  <Mic className="size-5" />
                ) : (
                  <MicOff className="size-5" />
                )}
              </button>
              <SelectDevice
                value={currentMic?.device?.deviceId}
                devices={microphones}
                onChange={(val) => setMicrophone(val)}
                Icon={Mic}
              />
            </div>
            <SelectDevice
              value={currentSpeaker?.device?.deviceId}
              devices={speakers}
              onChange={(val) => setSpeaker(val)}
              Icon={Volume2}
            />
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-6">
        {cancelLabel && (
          <Button variant="outline" onClick={onCancel} className="bg-gray-600 text-white rounded-full px-6 py-2">
            {cancelLabel}
          </Button>
        )}
        {actionLabel && (
          <Button
            onClick={onAction}
            disabled={getUserMediaError || !currentCam || !currentMic}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 disabled:bg-gray-400 flex items-center gap-2"
          >
            <span>
              <Video className="size-6 mr-2" />
            </span>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};
