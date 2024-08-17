export default function PaymentSuccess({
    searchParams: { amount },
  }: {
    searchParams: { amount: string };
  }) {
    return (
      <main className="max-w-xl mx-auto p-10 text-white text-center border m-10 rounded-md [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully sent</h2>
  
          <div className="p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
            ${amount}
          </div>
          {/* a button to login */}
          <div className="mt-10">
            <a href="/dashboard" className="text-black bg-white p-5 w-1/2 mt-10 rounded-xl font-bold disabled:opacity-50 disabled:animate-pulse hover:bg-slate-200">
             Start Learning
            </a>
          </div>
        </div>
      </main>
    );
  }