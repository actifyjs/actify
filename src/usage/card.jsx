import { Card } from '@/packages/components'

export default () => {
  return (
    <div className="flex flex-col not-prose">
      <Card className="max-w-xs">
        <img className="rounded-t-lg" src="https://picsum.photos/480/240" atl="" />
        <div class="block flex-grow flex-shrink p-5">
          <div class="font-medium text-gray-700 mb-3">Card title</div>
          <div class="text-gray-500">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </div>
        </div>
      </Card>
    </div>
  )
}
