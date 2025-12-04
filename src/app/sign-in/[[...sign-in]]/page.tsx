import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-md p-8">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-2xl border border-gray-200 rounded-2xl",
              headerTitle: "text-2xl font-bold text-gray-900",
              headerSubtitle: "text-gray-600",
              formButtonPrimary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg px-4 py-2 transition-all duration-200",
              formFieldInput: "rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500",
              footerActionLink: "text-blue-600 hover:text-blue-700 font-medium"
            }
          }}
          redirectUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
}