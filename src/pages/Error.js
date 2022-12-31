function Error() {
    return (
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-indigo-600">Error 404</span>
          <span className="block">Page Not Found</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Go Back Home
              </a>
            </div>
          </div>
        </div>
    )
  }
  export default Error;