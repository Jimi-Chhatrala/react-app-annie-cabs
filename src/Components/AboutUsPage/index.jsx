import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import bgImage from "../../images/car-bg.png";
import bgImage2 from "../../images/group-50.png";

function AboutUsPage() {
  return (
    <div>
      <NavBar />
      <div
        className="h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-[#00000094] text-white font-semibold text-4xl flex justify-center items-center w-full h-full">
          About Us
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto space-x-4 space-y-4 justify-around p-4">
        <div></div>
        <h1 className="text-3xl font-bold">Trusted Cab Services in India</h1>
        <div className="sm:flex sm:flex-row-reverse grid place-items-center">
          <div></div>
          <div className="flex place-items-center">
            <img
              className="w-full max-w-md"
              src="/static/media/Group 4.eaf51b66a9f1968bd0c8.png"
            />
          </div>
          <div className="bg-[#6EDA48] hidden sm:flex w-1 mx-2 h-52 rounded-full"></div>
          <div className="w-full">
            <div className="space-y-4">
              <p className="text-[#726d6d]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </p>
              <button className="bg-[#6EDA48] px-4 py-2 font-medium rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-cover bg h-[300px] max-w-6xl mx-auto my-10"
        style={{ backgroundImage: `url(${bgImage2})` }}
      ></div>
      <div className="my-6">
        <div className="text-2xl font-semibold text-center">How It Works</div>
        <div className="mx-auto h-[2px] rounded-md w-24 bg-green-300"></div>
      </div>
      <div className="sm:flex w-full max-w-6xl mx-auto sm:space-x-4 sm:space-y-0 space-y-4 justify-around p-4">
        <div className="w-full space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div class="bg-[#6EDA48] rounded-full max-w-max p-3 mx-auto">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgB7Zz/ddowEMe/9PX/0gmiTJB0gpIJmk4QMkHTCaATlE5AOkHTCaATQCfAmYBscJGejmAIGCe6s6Wgz3t6tmMFP77c6cfpZEAZIuraMrBlYsuSPDNbxrYYZPbjBLJlwaI5AW+43Jb+PkDmOSXxFvsszf59mEXcA1vck3j2+I2vJ2VB7fmIRTxHxmPF6LEofb7u0ybLlWDcRrrrETIeds1l6XpBz3Gidfn+qFw/Jd5BB2PL3J2wu5oddZx4N3w+5+vk0BLQYfhY1bZd8TFJ8RxaAjqLMuyipqLe6t4Z/09yaAl4y0fnopXW5Toce+jb8huZNaXhyR+qZlk1VjxaeHgyo8M8DWkyO6hhgUMkjGYvvOI/3jBNCHiIEyRMDAJ+RMJkCwwkBgGTnYU4soCBZAEDiUFAN1ZMth1sQkBTo06yPXEUFoh6IkdJLALmeGAgWcBADBIlFgE/IFGaELDOECX3woGcIVFyJxJINAKuFtlT4z30MTXruY7kwZ3wAlMP6wX6eafTKXCM0O60jl24/BmXUzPZc/84M7honVR5iDr1ohOxA2Xct4YsF9adp+TbTLccauBd/226Ocnj1poneyz2JxpG1QLJdwYLNMvUWuIFGkJ7GGPQPK4jukFDaAt4hXYYUEPjSjUX5i/QZtbpnS3/4F06vdQ5ep4X3SYL4nxtaTRd+AviwdgyJt+DGwii4sLUvvtWUdjyybr1AwTQssBLxIuxZQwhtAT8jLi5JJ9aHMwxWuCKHgQQF5B/Wa0xmEi7xYhkQ2hYoNbg+Yctp5DbDmEQG7S5vVWSYekZdZPXD3GH2CBl8UrPkRBxgpggvytdmtGBZ97S6xGJEom0geRH90PIc0L+1QDdreedk7egZJdDNyC/jV+Tk63n9SgckZmSVC8c07y3LiJDLSkBj3arlpSASec5hyAlYIEjRSozwe311VyzndtGvzyNk7B4kWmhSDyQ/DBjhrQSJQsbEzxFICIuzMHJ70gLEQsUSy6yIt5ZS5xCKEy0xTU221nX64cuosclIOO+qHNl6V55Yn+g+9UFyWSLFBBANJzFuSnXSIN7CCAeD3SubA+/ED8FBNAK6Q8R/9iwgAAqAnKv/BWyIXhp4s9WoPAozVXFZ7vo92vjgTOkAq1fwCMqIoUFcMXWhdUhmfB7b+szBxRGHylB4YtN5Rc2Digcg9QgH4YPwYk4pnDSaf+2If3Qfx36SBlav7m3LQxSh8KWI0NIp/etguSyC15KD2+FFkRUyURobbdmC9O9v1Cg1e2uHP5q6t2pUygQw37hAvoUWlsdmtgvfAg3w5juudfFy6Lb++pPocQjHq0ctwTqKLUAAAAASUVORK5CYII=" />
          </div>
          <span className="text-center text-lg font-bold">
            Book In Just 2 Tabs
          </span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className="w-full space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#6EDA48] rounded-full max-w-max p-3 mx-auto">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASwSURBVHgB7ZzhddowEIAvff1fOkHdCZIN6kyQbFA6QdggbJBkArMByQQ4E4RMYDIB6QTXu0p+CNuAhHW2MPre08PEsmxf7qTT6QRAJBKJnC8X0DOIOKKPhMoVlUsq5feRLszK+PygsqTyeXFxkUPP9CJAElpKHzeghJZCO3JQAn0JQaBikNASKvdU1ihHQSXje8FQ0IKbY/dkJy9IeoE7lNW4Q/C9J3CKaOGFgpgQRQYRVKbzBptRtG8+qfykQeYTPPMVZODR1VV4OWzclUMk4DZ6j3T9Z/CMlABdhTcj7fjjcgFp+SN93EHPfAEZVuDGK7izdKzv3XzFQOW6uPCGDi4H1R2h8vlcuAIBxGYi9MBrCGgQoS7iOwggZcLMC4TDMV2EFZICnEE4eB99SyRNmM33FsLgWcIHjET6RzQeGIgZ52S+KzhFSIAz7J8MBJEchUPhLwgiLcAZ9E8OpwyZ0AL7Q9R8GfFFJVQDyRr64bu0/9fJqhyrAvQACU/8/foYRHhalYN/chCcsu1CKqBahc2ojMzw+u1Mm/aVLglsFtXLhfWmNkpzXOrjd328ZFOlNsfQsd/ZhwD/x+V035SDX200Y36uAdej6MqEzXDSJchhtv0BQ4FMa1JxL7wHWrEeBR/DUEAVgjeZgmdQZSKYJDAkcNuhXvt8wQbtE3egO4deKq285Bt4AtWi1HC1r4Re7NG3pjSY7iMMFWxejpwfozG6rUWlLW47lJVAGXR/VTS8+NihjTHWs74KHKrpVtkhxFIID6j6y1GlfqrPrXdcl8A5oYXiI2K9wKGb7T5QmWOB7hSocq0jDAnjVmtksUdobL5ZSILrfZtDE6gSgUZGWXE52dW1SCQSGShBDSK4SQVJqPyonC73yC3jYGKAak57j27rxxx9Yf8xgXPFEFzbnUzZ2QkSD28BK3DboV5jPeZXrT+GcwBVQKCJBSqzHOl65jw5039LdJ1dmxcfYKhgc/yuFFzSUL8mwMr5XcGIOQ4xuIB1rWGzTPfU3ytAo15TMGJYayKoBguTAg90/LYC1HWb4oudmLPXzAStUb9BZSLwYjr7bQmVqVFtReXapy/HbdG9r+lwAZu0EF6LftHPwL5lmTryyqklEBoNWmaaqnmcWLZnrYHGNUnD/Zq4h5BA+71xE4c2nQWor5tYPksKHvCVG2ObEdVFws/Ksl4KHvAlwBvLeinIY7sr8xd4oLUAUflcqWX1kDTwCkPwF7GesrGPgw+MyuFummlkaDEAYT2RSbwfbAXW0zV2cTAXBg9vpOZzNv+EBdrROg3ERx9o25fY7Nnl30BI9pznczYj+TvY0bofbBVQxX63MPii1VaItho4hEn7N2hBKwHq6VgOpwuvNbfKpW69JoJqEXwO+/uuJ7BzYXgenR6o8wx2v8fAz7Xvd2VW4HlOfjS4HegsGkY7q5kK1ueyVVzm0umO6zNU071wux/Wyoogpo7XFjte3naWwe1Mj702CHDbGV44XltqdHasxuD2GkrnW8Bag/WoSAodgUPYM4JqVmGacWdhdqwnnov1d2JbvbRz+qS/8nGXW6/4Xit9PDvZ34zRWjjFHkY83KzaJRCJRCIREf4BUDQnKDDrXxwAAAAASUVORK5CYII=" />
          </div>
          <span className="text-center text-lg font-bold">Get a Driver</span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
      </div>
      <div className="sm:flex w-full max-w-6xl mx-auto sm:space-x-4 sm:space-y-0 space-y-4 justify-around p-4">
        <div className="w-full  space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#6EDA48] rounded-full max-w-max p-3 mx-auto">
            <img src="data:image/png;base64,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" />
          </div>
          <span className="text-center text-lg font-bold">
            Track Your Driver
          </span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </div>
        </div>
        <div className="w-full  space-y-4 rounded-lg sm:max-w-[300px] p-4 items-center grid">
          <div className="bg-[#6EDA48] rounded-full max-w-max p-3 mx-auto">
            <img
              className="w-20"
              src="data:image/png;base64,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"
            />
          </div>
          <span className="text-center text-lg font-bold">Arrive Safely</span>
          <div className="text-[#726d6d] text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
