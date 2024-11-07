import { Swiper, SwiperItem } from 'actify'

export default () => {
  const items = [
    {
      title: 'Swiper 1',
      src: 'https://images.unsplash.com/photo-1691977504044-fa2e8c813431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=8'
    },
    {
      title: 'Swiper 2',
      src: 'https://images.unsplash.com/photo-1691763731792-c5ee77f9112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1524&q=80'
    },
    {
      title: 'Swiper 3',
      src: 'https://images.unsplash.com/photo-1653916986137-996184bc4af0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
    }
  ]
  return (
    <Swiper autoPlay className="h-[320px]">
      {items.map((item, index) => (
        <SwiperItem key={index}>
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </SwiperItem>
      ))}
    </Swiper>
  )
}
