import { useSelector } from "react-redux";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";

function Subtotal({ formData, step, setStep, isLoading, order }) {
  const total = useSelector((state) => state.cart.total);
  const orderQuantity = useSelector((state) => state.cart.quantity);
  const installmentPrice = (total / 3).toFixed(2);
  const cartProducts = useSelector((state) => state.cart.products);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  const setNextStep = () => {
    setStep((step) => step + 1);
    scrollToTop();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${
          step === 2 ? "flex" : "sticky"
        } flex-col md:top-28 lg:top-44 md:ml-8 mt-6 md:mt-6 bg-white p-8 pt-6 w-full md:min-w-[375px] md:max-w-[375px]`}
      >
        <div className="pb-2 b-2 border-b-2">
          <h1 className="uppercase tracking-widest text-xl font-extrabold">Total</h1>
        </div>
        <div className="flex justify-beween w-full my-2 mt-4 items-center text-base justify-between">
          <div className="text-gray-500 font-bold tracking-widest">
            Subtotal ({!order ? orderQuantity : order?.products.length} items):
          </div>
          <div className=" font-bold ml-2 text-neutral-700">
            £{!order ? total.toFixed(2) : order?.total.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center gap-x-4 mb-6 text-base justify-between">
          <div className="text-gray-500 font-bold tracking-widest">
            Delivery:
          </div>
          <div className=" font-bold ml-2 text-neutral-700">£0.00</div>
        </div>
        {step === 0 && (
          <>
            {orderQuantity >= 1 ? (
              <button
                className="py-2 px-4 group overflow-hidden inline-block relative font-semibold text-lg  uppercase w-full text-white bg-neutral-900"
                onClick={setNextStep}
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all tracking-widest duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-neutral-900 tracking-widest">
                  Checkout
                </span>
              </button>
            ) : (
              <button
                className="py-2 px-4 group overflow-hidden inline-block relative font-semibold text-lg tracking-widest uppercase w-full text-white bg-neutral-900 opacity-60"
                disabled
              >
                Checkout
              </button>
            )}
          </>
        )}
        {step === 1 && (
          <>
            {!formData || cartProducts.length == 0 ? (
              <button
                className="py-2 px-4 group overflow-hidden inline-block relative font-bold text-lg  uppercase w-full text-white bg-neutral-900 opacity-60"
                disabled
              >
                Confirm Order
              </button>
            ) : (
              <>
                {!isLoading ? (
                  <button
                    className="py-2 px-4 group overflow-hidden inline-block relative font-bold text-lg  uppercase w-full text-white bg-neutral-900 h-[43px]"
                    form="deliveryForm"
                  >
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90 items-center"></span>
                    <span className="relative group-hover:text-neutral-900">
                      Confirm Order
                    </span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="py-2 px-4 group overflow-hidden relative font-bold text-lg  uppercase w-full text-white flex bg-neutral-900 items-center justify-center h-[43px]"
                  >
                    <div className="border-t-transparent border-solid animate-spin  rounded-full border-slate-200 border-2 h-6 w-6"></div>
                  </button>
                )}
              </>
            )}
          </>
        )}
        {step === 2 && (
          <>
            <button
              disabled
              className="py-2 px-4 group overflow-hidden relative font-bold text-lg  border b-neutral-900 uppercase w-full text-neutral-900 flex bg-white items-center justify-center h-[43px]"
            >
              ON THE WAY
            </button>
          </>
        )}

        {step === 0 ? (
          <div className="flex flex-col">
            <div className="flex items-center mt-6">
              <div className="relative w-12 h-12">
                <Image fill src="/images/klarna.svg" alt="Klarna Logo" />
              </div>
              <p className="ml-4 text-sm mt-1 text-neutral-500">
                Pay in 3 monthly, interest free payments of{" "}
                <span className="font-bold">£{installmentPrice}</span>
              </p>
            </div>
            <div className="flex mt-4">
              <div className="relative w-10 h-8">
                <Image fill src="/images/deliveryBlack.svg" alt="Klarna Logo" />
              </div>
              <p className="ml-6 mt-1 text-sm text-neutral-500">
                Free delivery on all products when you spend over £50
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {step === 1 ? (
          <>
            <div className="flex flex-col">
              <div className="flex items-center mt-6">
                <h2 className=" font-extrabold text-sm uppercase text-neutral-700">
                  We Accept:
                </h2>
              </div>
              <div className="flex mt-2 gap-4">
                <div className="relative w-10 h-8 cursor-pointer">
                  <Image fill src="/images/visaOption.svg" alt="Klarna Logo" />
                </div>
                <div className="relative w-10 h-8 cursor-pointer">
                  <Image
                    fill
                    src="/images/paypalOption.svg"
                    alt="Klarna Logo"
                  />
                </div>
                <div className="relative w-10 h-8 cursor-pointer">
                  <Image
                    fill
                    src="/images/mastercardOption.svg"
                    alt="Klarna Logo"
                  />
                </div>
                <div className="relative w-10 h-8 cursor-pointer">
                  <Image fill src="/images/klarna.svg" alt="Klarna Logo" />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium text-neutral-600 leading-normal">
                By placing your order you agree to our{" "}
                <span className="underline cursor-pointer mr-1">Terms & Conditions, privacy</span>and 
                <span className="ml-1 underline cursor-pointer">returns policies.</span> You also consent to some of your
                data being stored by Marquet, which may be used to make future
                shopping experiences better for you.
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div className="my-6">
        <p className="mb-4 text-neutral-700 uppercase tracking-widest font-bold" >More from Marquet</p>
        <ul className="flex items-center justify-center  gap-6">
          <li className="opacity-50">
            <BsFacebook size={24}/>
          </li>
          <li className="opacity-50">
            <BsInstagram size={24}/>
          </li>
          <li className="opacity-50">
            <BsTwitter size={24}/>
          </li>
        </ul>
      </div> */}

      {step === 2 && (
        <div className="bg-neutral-100 flex gap-4 items-center w-full min-w-[375px] md:max-w-[375px]  ml-8 justify-center py-4 mt-4">
          <FaRecycle size={24} className="opacity-50" />
          <p className="opacity-60 text-sm">
            All of our packaging is 100% recyclable.
          </p>
        </div>
      )}
    </div>
  );
}

export default Subtotal;
