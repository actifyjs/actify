import { Card } from 'actify'

export default () => {
  return (
    <div className="flex-wrap xl:flex-nowrap flex gap-2 not-prose">
      <Card>
        <img
          atl=""
          className="w-full object-fit"
          src="https://images.unsplash.com/photo-1694736301344-0a2e4b5f51c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
        />
        <div className="block flex-grow flex-shrink p-5 text-on-surface">
          <div className="font-medium mb-3">default card</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Card>
      <Card type="filled">
        <img
          atl=""
          className="w-full object-fit"
          src="https://images.unsplash.com/photo-1694732519038-dcc9379eb148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="block flex-grow flex-shrink p-5 text-surface">
          <div className="font-medium mb-3">filled card</div>
          <p>
            Tempore rem numquam qui quae placeat, enim ut temporibus inventore
            architecto eaque.
          </p>
        </div>
      </Card>
      <Card type="outlined">
        <img
          atl=""
          className="w-full object-fit"
          src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        />
        <div className="block flex-grow flex-shrink p-5 text-on-surface">
          <div className="font-medium mb-3">outlined card</div>
          <p>
            At fugit expedita quibusdam veniam rerum omnis itaque optio aliquam
            quo saepe laborum, autem quia sint atque? Placeat molestias
            dignissimos illo quos.
          </p>
        </div>
      </Card>
    </div>
  )
}
