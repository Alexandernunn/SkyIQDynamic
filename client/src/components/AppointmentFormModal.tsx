import { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AppointmentFormModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AppointmentFormModal({ isOpen, setIsOpen }: AppointmentFormModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {
        "theme":"dark",
        "cssVarsPerTheme":{
          "dark":{"cal-brand":"#009AEE"},
          "light":{"cal-brand":"#009AEE"}
        },
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    })();
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[900px] h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Your Consultation</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <Cal 
            namespace="30min"
            calLink="skyiq/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view","theme":"dark"}}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
