import InfoCards from "./infoCards";

function Feature() {
  return (
    <section id="feature" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Learn faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to learn with ease
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Getting ready for exams or quizzes? Flips makes it easy to turn your study materials into powerful flashcards,
           helping you master any subject quickly and efficiently. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {InfoCards.map((infoCard) => (
              <div key={infoCard.id} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <infoCard.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {infoCard.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {infoCard.bodyText}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Feature;
