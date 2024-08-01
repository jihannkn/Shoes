export default function GraphCandle() {
    return(
        <div className="w-[26%] h-[40vh] p-[13px] flex justify-between bg-[#c8ecd8] rounded-[15px] border-0 text-[12px]">
                <div className="graf1">
                  <div className="w-[80%] h-[3.8vh] mt-[8px] bg-[#cabcff] rounded-[3px]"></div>
                  <div className="mt-[10px] flex flex-col gap-[8.5px]">
                    <p>30</p>
                    <p>25</p>
                    <p>20</p>
                    <p>15</p>
                    <p>10</p>
                    <p>5</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-[55px]">
                    <p>Product Views</p>
                    <select className="p-[7px] bg-transparent border-[1.8px] border-white rounded-[13px] outline-none text-[12px]">
                      <option value="">Last 7 days</option>
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                  <div className="h-[30vh] flex justify-end items-end gap-[22px]">
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[20.7vh] bg-[#8983ff]"></div>
                      <p>22</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[16vh] bg-[#ffbe9a]"></div>
                      <p>23</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[24vh] bg-[#3185fc]"></div>
                      <p>24</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[13vh] bg-[#8983ff]"></div>
                      <p>25</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[19vh] bg-[#8983ff]"></div>
                      <p>26</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[10.6vh] bg-[#ffbe9a]"></div>
                      <p>27</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[17.6vh] bg-[#abd4bf]"></div>
                      <p>28</p>
                    </div>
                  </div>
                </div>
              </div>
    )
}