
import Button from "@/components/ui/Button";
import {
    IconBrandGoogle,
} from "@tabler/icons-react";

const Login = () => {

    return (
        <div className="min-h-screen w-full flex items-center">
            <div className="max-w-md w-[90%] mx-auto rounded-2xl  px-3 py-14 shadow-input bg-white dark:bg-black ring-1  ring-gray-100">
                <div className="mx-auto w-fit text-center">

                    <h2 className="font-extrabold text-3xl tracking-tight bg-gradient-to-br from-slate-200 to-slate-500 bg-clip-text text-transparent">
                        Welcome to KaizenYou
                    </h2>
                    <p className=" text-sm max-w-[97%] mt-5 text-neutral-400">
                        Hope you are having a superb day! <br /> Login with your Google Account.
                    </p>
                </div>



                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-11 mb-5 h-[1px] w-full" />

                <div className="flex flex-col max-w-[70%] mx-auto">
                    <Button
                        className="  flexitems-center justify-center px-4"
                    >
                        <IconBrandGoogle className="size-5 text-neutral-300 mr-1" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-base">
                            Google
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default Login

