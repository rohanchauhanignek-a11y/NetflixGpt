import { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Header />

      <div className="relative">
        {/* Background Image */}
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg"
          alt="background"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-black/80 p-10 rounded-md w-96 flex flex-col gap-4"
          >
            {/* Heading */}
            <h1 className="text-white text-3xl font-bold mb-4">
              {isSignup ? "Sign Up" : "Sign In"}
            </h1>

            {/* Name Input (Only for Signup) */}
            {isSignup && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                  })}
                  className="p-3 rounded bg-gray-700 text-white outline-none border border-transparent focus:border-red-500"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </>
            )}

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="p-3 rounded bg-gray-700 text-white outline-none border border-transparent focus:border-red-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="p-3 rounded bg-gray-700 text-white outline-none border border-transparent focus:border-red-500"
            />

            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-red-600 text-white p-3 rounded font-semibold hover:bg-red-700 transition-all duration-300"
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </button>

            {/* Toggle Sign In / Sign Up */}
            <p
              onClick={() => setIsSignup(!isSignup)}
              className="text-white cursor-pointer hover:text-red-500 transition-colors duration-300 text-center"
            >
              {isSignup
                ? "Already have an account? Sign In"
                : "New to Netflix? Sign Up Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;