import { Card } from 'actify'

export default () => {
  return (
    <div className="flex gap-2 not-prose">
      <Card>
        <img src="https://picsum.photos/480/240?1" atl="" />
        <div className="block flex-grow flex-shrink p-5">
          <div className="font-medium text-gray-700 mb-3">default card</div>
          <div className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </Card>
      <Card type="filled">
        <img src="https://picsum.photos/480/240?2" atl="" />
        <div className="block flex-grow flex-shrink p-5">
          <div className="font-medium text-gray-700 mb-3">filled card</div>
          <div className="text-gray-500">
            Tempore rem numquam qui quae placeat, enim ut temporibus inventore
            architecto eaque.
          </div>
        </div>
      </Card>
      <Card type="outlined">
        <img src="https://picsum.photos/480/240?3" atl="" />
        <div className="block flex-grow flex-shrink p-5">
          <div className="font-medium text-gray-700 mb-3">outlined card</div>
          <div className="text-gray-500">
            At fugit expedita quibusdam veniam rerum omnis itaque optio aliquam
            quo saepe laborum, autem quia sint atque? Placeat molestias
            dignissimos illo quos.
          </div>
        </div>
      </Card>
    </div>
  )
}
