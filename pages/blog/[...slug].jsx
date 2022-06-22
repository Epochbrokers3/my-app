import { useRouter } from 'next/router'

const Test = () => {
  const router = useRouter()
  const { slug } = router.query
    console.log(router.query);
  return <p>Test: {slug}</p>
}

export default Test