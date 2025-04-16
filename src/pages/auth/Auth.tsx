import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import AuthForm from "@/components/auth/AuthForm";

export default function Auth() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !isLoading) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-muted/30">
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          JescapsAntwi's Project
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Sign in to access your dashboard
        </p>
      </div>
      <AuthForm />
    </div>
  );
}
