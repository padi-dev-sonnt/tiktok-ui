import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ButtonConnect() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
      <button onClick={() => open()}>Open Connect Modal</button>
      <button onClick={() => open({ view: 'Metamask' })}>Open Network Modal</button>
    </>
  )
}