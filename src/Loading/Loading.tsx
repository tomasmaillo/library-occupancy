import LoadingAnimation from './LoadingAnimation'

const Loading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        height: `${isLoading ? '0%' : '100%'}`,
        zIndex: 9999,
        overflow: 'hidden',
        transition: '1s',
      }}>
      <div style={{ position: 'relative', height: '100vh' }}>
        <LoadingAnimation />
      </div>
    </div>
  )
}

export default Loading
