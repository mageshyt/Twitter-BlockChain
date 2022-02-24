import { Dispatch, SetStateAction, useState } from 'react'
import { GiEarthAmerica } from 'react-icons/gi'

const style = {
  wrapper: `h-[21rem] w-[25rem]  md:w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col`,
  inputFieldsContainer: `flex-1`,
  inputContainer: `mb-4`,
  fileInput: `hidden`,
  input: `bg-transparent outline-none text-xl w-full`,
  customInput: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  fileSelected: `bg-[#2b6127] text-white px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  lower: `flex justify-between items-center`,
  visibility: `flex items-center text-[#1d9bf0] text-sm font-bold`,
  visibilityText: `ml-2`,
  mintButton: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  inactiveMintButton: `text-black px-3 py-1 rounded-full bg-[#8899a6]`,
}

interface InitialStateProps {
  profileImage: File
  setProfileImage: Dispatch<SetStateAction<File | undefined>>
  name: string
  setName: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
  mint: Function
}

const InitialState = ({
  profileImage,
  setName,
  name,
  mint,
  setProfileImage,
  description,
  setDescription,
}: InitialStateProps) => {
  // for rendering image in modal
  const [RenderImage, setRenderImage] = useState()
  return (
    <div className={style.wrapper}>
      <div className={style.inputFieldsContainer}>
        {/* //! upload image */}
        <div className={style.inputContainer}>
          <label
            htmlFor="image-upload"
            className={profileImage ? style.fileSelected : style.customInput}
          >
            {/* // ! now we are going to set out profile */}
            <input
              type="file"
              id="image-upload"
              accept=".jpg, .jpeg, .png"
              className={style.fileInput}
              placeholder="Image URL"
              onChange={(e) => {
                const render = new FileReader()
                if (e.target.files![0]) {
                  render.readAsDataURL(e.target.files![0])
                }
                render.onload = (event: File) => {
                  setRenderImage(event!.target!.result)
                }

                setProfileImage(e.target.files![0])
              }}
            />
            Select File
          </label>
          {
            //! if we selected a file then we will show the image
            profileImage && (
              <div className="m-4">
                <img
                  className=" h-[100px] cursor-pointer object-contain"
                  src={RenderImage}
                />
              </div>
            )
          }
        </div>
        {/* details for image */}
        <div className={style.inputContainer}>
          <input
            type="text"
            className={style.input}
            placeholder="Title of the image"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* description for the image */}
        <div className={style.inputContainer}>
          <input
            type="text"
            className={style.input}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      {/* everyone can see notice */}
      <div className={style.lower}>
        <div className={style.visibility}>
          <GiEarthAmerica />
          <span className={style.visibilityText}>Everyone can see this</span>
        </div>
        {/* if i had profile image ,name,description exist then give me style of mint btn */}
        <div
          className={
            name && description && profileImage
              ? style.mintButton
              : style.inactiveMintButton
          }
          onClick={() => {
            if (name && description && profileImage) {
              mint()
            }
          }}
        >
          Mint
        </div>
      </div>
    </div>
  )
}

export default InitialState
