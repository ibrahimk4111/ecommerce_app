import React from "react";
const Footer = () => {

  const liClassNames = " hover:translate-x-3 transition-all duration-300 ease-in-out"

  return (
    <div className=" bg-slate-100 py-20 px-4">
      <div className=" container mx-auto grid md:grid-cols-4 gap-10 ">
        {/* Contact */}
        <div>
          <h4 className=" mb-5 text-2xl font-bold">Contact</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore iure quia voluptatem expedita in doloremque repudiandae dolore, nam, rem officia labore, eum dolorum? Perspiciatis debitis ullam fugiat sit. Laborum!</p>
        </div>
        
        {/* elements */}
        <div>
          <h4 className=" mb-5 text-2xl font-bold">Elements</h4>
          
          <ul className=" space-y-3 ">
            <li className={liClassNames}><a href="#"> Out Events</a></li>
            <li className={liClassNames}><a href="#"> Ask any Question</a></li>
            <li className={liClassNames}><a href="#"> Refund Policy</a></li>
            <li className={liClassNames}><a href="#"> Payment Options</a></li>
            <li className={liClassNames}><a href="#"> Privacy Policy</a></li>
            <li className={liClassNames}><a href="#"> Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className=" mb-5 text-2xl font-bold">Quick Links</h4>
          
          <ul className=" space-y-3">
            <li className={liClassNames}><a href="#"> Activities</a></li>
            <li className={liClassNames}><a href="#"> Volunteer</a></li>
            <li className={liClassNames}><a href="#"> Campaigns</a></li>
            <li className={liClassNames}><a href="#"> Contact</a></li>
            <li className={liClassNames}><a href="#"> Register</a></li>
          </ul>
        </div>
        
        {/* newsletter */}
        <div>
          <h4 className=" text-2xl font-bold">Newsletter</h4>
          <p className=" my-5">Lorem ipsum dolor sit amet.</p>
          <form action="" className=" flex flex-col justify-start items-start gap-5">
            <input
              type="email"
              className=" p-2 w-full rounded-md bg-white focus:ring-1 outline-none "
              placeholder="example@gmail.com"
            />
            <button className=" bg-white text-black rounded-md hover:bg-orange-400 hover:text-white hover:ring-1 p-2 transition-all duration-500 ease-in-out ">
              subscribe
            </button>
          </form>
        </div>
      </div>

      {/* copyright  */}
      <p className=" text-center mt-10 ">
        Copyright © 2024 |{" "}
        <a href="#" className=" text-orange-500">
          Van plaza
        </a>
      </p>
    </div>
  );
};

export default Footer;
