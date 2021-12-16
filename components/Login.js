import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Component</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full justify-center items-center space-y-10">
        <Image
          className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-purple-700 animate-ping rounded-xl blur-md" />
          <button
            onClick={authenticate}
            className="relative bg-fuchsia-600 hover:bg-fuchsia-500 rounded-xl p-5 items-center justify-center space-y-2"
          >
            {isAuthenticating ? (
              <>
                <div className="flex items-center justify-center ">
                  <div className="w-10 h-10 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
                <p className="text-white animate-pulse">Loading...</p>
              </>
            ) : (
              <>
                <p>Login with</p>
                <div className="h-8 w-44 bg-no-repeat bg-[url('https://metamask.io/images/mm-logo.svg')] animate-pulse" />
              </>
            )}
          </button>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
