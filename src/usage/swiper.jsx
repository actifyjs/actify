import { Swiper } from 'actify'

export default () => {
  return (
    <Swiper current={0} interval={2000} control indicator>
      <Swiper.Wrap>
        <Swiper.Item>
          <img
            alt="Swiper 1"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8"
          />
        </Swiper.Item>
        <Swiper.Item>
          <img
            alt="Swiper 2"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1691763731792-c5ee77f9112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80"
          />
        </Swiper.Item>
        <Swiper.Item>
          <img
            alt="Swiper 3"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1653916986137-996184bc4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          />
        </Swiper.Item>
      </Swiper.Wrap>
    </Swiper>
  )
}
