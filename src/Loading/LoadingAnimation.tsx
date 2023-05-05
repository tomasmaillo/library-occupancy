import { motion } from 'framer-motion'

const LoadingAnimation = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* TODO: move this svg elsewhere :D */}

      <svg
        width="104"
        height="127"
        viewBox="0 0 104 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <style>
          {`
            #haiii {
              stroke-linecap: round;
              animation-delay: 10s;
              animation: haiii-animation 5s ease-in forwards;
            }
            @keyframes haiii-animation {
              to {
                stroke-dashoffset: 0;
              }
            }

          `}
        </style>

        <path
          id="haiii"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          d="M1 19.5V1H77M1 19.5H29L29.2529 41.5M1 19.5L29.2529 41.5M30 106.5H50M30 106.5L58.5 126H77M30 106.5L29.2529 41.5M50 106.5V19.5M50 106.5L77 126M50 19.5H77M50 19.5L77 43.5M77 19.5V1M77 19.5L103.5 43.5M77 1L103.5 25.5V43.5M103.5 43.5H77M77 43.5V126"
          stroke="black"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          marginTop: '2rem',
          fontSize: '1rem',
          padding: '1rem',
          borderRadius: '1rem',
          border: '1px solid rgba(255, 0, 0, 0.05)',
          backgroundColor: 'rgba(255, 0, 0, 0.05)',
          fontFamily: 'Avenir Next',
          textAlign: 'center',
        }}>
        University servers are currently down <br />
        Nothing I can do about it :(
      </motion.div>
    </div>
  )
}

export default LoadingAnimation
