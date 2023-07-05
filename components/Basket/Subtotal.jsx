import { useSelector } from "react-redux";
import Image from "next/image";

function Subtotal({ formData, step, setStep, isLoading }) {
  const total = useSelector((state) => state.cart.total);
  const orderQuantity = useSelector((state) => state.cart.quantity);
  const installmentPrice = (total / 3).toFixed(2);

  const setNextStep = () => {
    setStep((step) => step + 1);
  };

  return (
    <div>
      <div className="sticky top-44 ml-8 bg-white p-8 border border-neutral-200 w-full mt-2 min-w-[375px] md:max-w-[375px]">
        <div className="flex justify-beween w-full mb-2 items-center">
          <div>Subtotal ({orderQuantity} items):</div>
          <div className=" font-bold text-lg ml-2">£{total.toFixed(2)}</div>
        </div>
        <div className="flex items-center gap-x-4 mb-6">
          <input type="checkbox" />
          <p>This order contains a gift</p>
        </div>
        {step === 0 && (
          <>
            {orderQuantity >= 1 ? (
              <button
                className="py-2 px-4 group overflow-hidden inline-block relative font-bold text-lg  uppercase w-full text-white bg-neutral-900"
                onClick={setNextStep}
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-neutral-900">
                  Checkout
                </span>
              </button>
            ) : (
              <button
                className="py-2 px-4 group overflow-hidden inline-block relative font-bold text-lg  uppercase w-full text-white bg-neutral-900 opacity-60"
                disabled
              >
                Checkout
              </button>
            )}
          </>
        )}
        {step === 1 && (
          <>
            {!formData ? (
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
                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90 items-center"></span>
                    <span class="relative group-hover:text-neutral-900">
                      Confirm Order
                    </span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="py-2 px-4 group overflow-hidden relative font-bold text-lg  uppercase w-full text-white flex bg-neutral-900 items-center justify-center h-[43px]"
                  >
                    <div class="border-t-transparent border-solid animate-spin  rounded-full border-slate-200 border-2 h-6 w-6"></div>
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
      </div>
    </div>
  );
}

export default Subtotal;
