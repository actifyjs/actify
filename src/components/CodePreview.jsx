import React from 'react'

import {
  Badge,
  Card,
  Carousel,
  CarouselItem,
  Snackbar,
  Button,
  Fab,
  IconButton,
  SegmentedButton,
  Checkbox,
  Chip,
  Dialog,
  DialogActivator,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogClose,
  Divider,
  Elevation,
  Icon,
  List,
  ListItem,
  Menu,
  MenuItem,
  LinearProgress,
  CircularProgress,
  RadioButton,
  Ripple,
  Select,
  SelectOption,
  Slider,
  Switch,
  Tabs,
  Tab,
  TabsBody,
  TabPanel,
  TabsHeader,
  TextField,
  Spacer,
  Tooltip,
  TooltipActivator,
  TooltipContent
} from 'actify'

import SyntaxHighlighter from '@/src/components/SyntaxHighlighter'
import { LiveProvider, LiveEditor, LivePreview } from 'react-live'

const scope = {
  Badge,
  Card,
  Carousel,
  CarouselItem,
  Snackbar,
  Button,
  Fab,
  IconButton,
  SegmentedButton,
  Checkbox,
  Chip,
  Dialog,
  DialogActivator,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogClose,
  Divider,
  Elevation,
  Icon,
  List,
  ListItem,
  Menu,
  MenuItem,
  LinearProgress,
  CircularProgress,
  RadioButton,
  Ripple,
  Select,
  SelectOption,
  Slider,
  Switch,
  Tabs,
  Tab,
  TabsBody,
  TabPanel,
  TabsHeader,
  TextField,
  Spacer,
  Tooltip,
  TooltipActivator,
  TooltipContent
}

const CodePreview = (props) => {
  const { code, children } = props

  return (
    <LiveProvider code={code} scope={scope}>
      <Tabs value="preview" className="not-prose rounded-lg bg-secondary/10">
        <div className="flex border-b border-[#ccc] dark:border-[#222]">
          <TabsHeader className="bg-transparent">
            <Tab value="preview" className="min-w-[120px]">
              <Icon name="Eye" size={18} />
              Preview
            </Tab>
            <Tab value="code" className="min-w-[120px]">
              <Icon name="Code2" size={18} />
              Code
            </Tab>
          </TabsHeader>
        </div>
        <TabsBody className="p-2">
          <TabPanel value="preview">
            <LivePreview className="flex gap-2" />
          </TabPanel>
          <TabPanel value="code">
            <SyntaxHighlighter language="jsx">
              <LiveEditor />
            </SyntaxHighlighter>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </LiveProvider>
  )
}

export default CodePreview
