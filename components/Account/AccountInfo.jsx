import React from "react";
import { motion } from "framer-motion";

function AccountInfo({ session }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="w-full bg-white p-8"
    >
      <div className=" border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="pb-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base leading-6 text-neutral-600 uppercase tracking-widest font-bold">
              Name
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-500 sm:col-span-2 sm:mt-0">
              {session?.user.name}
            </dd>
          </div>
          <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base leading-6 text-neutral-600 uppercase tracking-widest font-bold">
              Email address
            </dt>
            <dd className="mt-1 text-base leading-6 text-gray-500  sm:col-span-2 sm:mt-0">
              {session?.user.email}
            </dd>
          </div>
          <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-base leading-6 text-neutral-600 uppercase tracking-widest font-bold">
              Billing Address
            </dt>
            <dl>
              <dd className="mt-1 text-base leading-7 text-gray-500 sm:col-span-2 sm:mt-0">
                07123456789
              </dd>
              <dd className="mt-1 text-base leading-7 text-gray-500 sm:col-span-2 sm:mt-0">
                123 Nowhere Lane
              </dd>
              <dd className="mt-1 text-base leading-7 text-gray-500 sm:col-span-2 sm:mt-0">
                Hawkins
              </dd>
              <dd className="mt-1 text-base leading-7 text-gray-500 sm:col-span-2 sm:mt-0">
                Ilinois
              </dd>
              <dd className="mt-1 text-base leading-7 text-gray-500 sm:col-span-2 sm:mt-0">
                90210
              </dd>
            </dl>
          </div>
        </dl>
      </div>
    </motion.div>
  );
}

export default AccountInfo;
