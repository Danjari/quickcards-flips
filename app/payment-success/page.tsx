export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
    
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center overflow-hidden">
            <div className="bg-white mb-10 border rounded-lg p-10 shadow-2xl max-w-md w-full">
                <h1 className="text-5xl text-indigo-700 font-extrabold mb-4 text-center">Thank you!</h1>
                <h2 className="text-2xl text-gray-700 text-center">You successfully sent</h2>
                <div className="p-4 rounded-md text-indigo-600 mt-5 text-4xl font-bold text-center bg-gray-100">
                    {amount}   
                </div>
                <div className="mt-10 flex justify-center">
                    <a
                        href="/dashboard"
                        className="rounded-full bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Start Learning
                    </a>
                </div>
            </div>
        </div>
     
    );
  }