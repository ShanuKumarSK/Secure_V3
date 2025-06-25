import React from "react";
import { stateImages } from "@/assets/staticData/stateImages";
import Image from "next/image";
import { motion } from "framer-motion";

type StateInfo = {
  name: string;
  worksReceived: number;
  firstApproval: number;
  finalApproval: number;
  consumedByMIS: number | null;
};

type Props = {
  state: StateInfo | null;
  stateCode: string;
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const StateCard: React.FC<Props> = ({ state, stateCode }) => {
  const stateImageData = stateImages[stateCode];

  if (!state) {
    return <div className="text-gray-500">Click a state to see details</div>;
  }

  return (
    // <div classNameName="bg-white shadow-lg rounded-lg p-6 w-full md:w-96">
    //   {stateImageData?.image && (
    //     <div classNameName="relative w-full h-48 mb-4 rounded-md overflow-hidden">
    //       <Image
    //         src={stateImageData.image}
    //         alt={state.name}
    //         fill
    //         style={{ objectFit: "cover" }}
    //         priority
    //       />
    //     </div>
    //   )}

    //   <h2 classNameName="text-xl font-bold mb-2">{state.name}</h2>
    //   <p>
    //     <strong>Works Received:</strong> {state.worksReceived}
    //   </p>
    //   <p>
    //     <strong>First Approval:</strong> {state.firstApproval}
    //   </p>
    //   <p>
    //     <strong>Final Approval:</strong> {state.finalApproval}
    //   </p>
    //   <p>
    //     <strong>Consumed By MIS:</strong>{" "}
    //     {state.consumedByMIS !== null ? state.consumedByMIS : "N/A"}
    //   </p>
    // </div>
    <div className="w-full md:w-96">
      <div className="nft bg-linear-to-t from-cyan-700 to-cyan-500">
        <div className='main'>
          {stateImageData?.image && (
            <div className="relative w-full h-48 mb-4 rounded-t-md overflow-hidden">
              <Image
                className="tokenImage"
                src={stateImageData.image}
                alt={state.name}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}
          <motion.div
            key={state.name}
            className="p-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            <h2 className="text-orange-700 font-bold text-xl">{state.name}</h2>

            {[
              { label: "Works Received", value: state.worksReceived },
              { label: "First Approval", value: state.firstApproval },
              { label: "Final Approval", value: state.finalApproval },
              {
                label: "Consumed By MIS",
                value: state.consumedByMIS !== null ? state.consumedByMIS : "N/A",
              },
            ].map((item) => {
              return (
                <motion.p
                  key={item.label}
                  className="description"
                  variants={fadeRightVariant}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <strong>{item.label}:</strong> {item.value}
                </motion.p>)
            })}
          </motion.div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default StateCard;
