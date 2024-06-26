import { ToastAction } from "../ui/toast";
import { toast } from "../ui/use-toast";

const ErrorToast = (error: any) => {
  toast({
    variant: "destructive",
    title: "Error",
    description: error.message,
    action: (
      <ToastAction altText="Try again" onClick={() => window.location.reload()}>
        Try again
      </ToastAction>
    ),
  });
};

export default ErrorToast;
