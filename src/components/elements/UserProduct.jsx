export default function UserProduct() {
    return(
        <div className="mr-20 flex flex-col items-start gap-5 text-xs">
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#b9e3cb]">
                          <i className="fa-regular fa-circle-user text-lg"></i>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <p>People reached</p>
                          <i className="fa-solid fa-circle-info text-sm"></i>
                        </div>
                      </div>
                      <h1 className="mt-1 text-lg">256k</h1>
                      <div className="mt-1">
                        <div className="flex items-center">
                          <p className="text-xs text-green-500 flex items-center gap-1">
                            <i className="fa-solid fa-arrow-up"></i> 37.8%
                            <span className="text-black ml-1">this week</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#c8bdfe] rotate-[-90deg]">
                          <i className="fa-solid fa-right-left text-lg"></i>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <p>Engagement</p>
                          <i className="fa-solid fa-circle-info text-sm"></i>
                        </div>
                      </div>
                      <h1 className="mt-1 text-lg">1.2x</h1>
                      <div className="mt-1">
                        <div className="flex items-center">
                          <p className="text-xs text-green-500 flex items-center gap-1">
                            <i className="fa-solid fa-arrow-up"></i> 37.8%
                            <span className="text-black ml-1">this week</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
    )
}