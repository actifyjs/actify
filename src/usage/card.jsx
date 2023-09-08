import { Card } from 'actify'

export default () => {
  return (
    <div className="flex gap-2 not-prose">
      <Card>
        <img
          atl=""
          className="w-full object-fit"
          src="https://picsum.photos/480/240?1"
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
          src="https://picsum.photos/480/240?2"
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
          src="https://picsum.photos/480/240?3"
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
