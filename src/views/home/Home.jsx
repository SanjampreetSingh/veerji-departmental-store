import Heroes from "../../components/common/heroes/Heroes"
import ResponsiveMap from "../../components/common/responsive-map/ResponsiveMap"

export default function Home(props) {
  const { isAuthenticated } = props
  return (
    <>
      <Heroes isAuthenticated={isAuthenticated} />
      <ResponsiveMap />
    </>
  )
}
