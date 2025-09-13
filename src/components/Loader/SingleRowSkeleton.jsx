import React from 'react'
import './skeleton_loader.css'

const SingleRowSkeleton = () => {
  return (
    <>

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" w-full flex justify-center items-center gap-[20px]  " >

                <span className="loader single_row_skeleton " ></span>
                <span className="loader single_row_skeleton " ></span>
                <span className="loader single_row_skeleton " ></span>
                <span className="loader single_row_skeleton " ></span>

            </div>

        </>
  )
}

export default SingleRowSkeleton;