'use client'
import { useState } from 'react'
import axios from 'axios'

interface Props {}

const JobTitleFun: React.FC<Props> = () => {
  const [jobTitle, setJobTitle] = useState<string>('')
  const [funJobTitle, setFunJobTitle] = useState<string>('')
  const [inappropriateLevel, setInappropriateLevel] = useState<number>(5)

  const handleGenerate = async () => {
    try {
      // Ensure your API can handle the weirdness parameter
      const response = await axios.post('/api/jobtitle', {
        title: jobTitle,
        weirdness: inappropriateLevel,
      })
      if (response.data.title) {
        setFunJobTitle(response.data.title)
      } else {
        setFunJobTitle('Oops! Something went wrong.')
      }
    } catch (error) {
      setFunJobTitle('Error generating title. Please try again.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleGenerate()
    }
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInappropriateLevel(Number(e.target.value))
  }

  return (
    <div className="text-primary flex flex-col space-y-4 w-full lg:w-1/2">
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your job title..."
        className="text-primary w-full p-2 border rounded-md focus:border-blue-500 focus:outline-none"
      />
      <div>
        <label htmlFor="weirdness-slider">
          Weirdness Level: {inappropriateLevel}
        </label>
        <input
          type="range"
          id="weirdness-slider"
          name="weirdness-slider"
          min="1"
          max="10"
          value={inappropriateLevel}
          onChange={handleSliderChange}
          className="w-full"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Generate LinkedIn Bio
      </button>
      {funJobTitle && (
        <div className="mt-5 text-center p-4 border rounded-md">
          Your LinkedIn Title: <strong>{funJobTitle}</strong>
        </div>
      )}
    </div>
  )
}

export default JobTitleFun
