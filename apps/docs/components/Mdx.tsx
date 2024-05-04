// @ts-nocheck
'use client'
import {
  Icon,
  Accordion,
  TopAppBar,
  BottomAppBar,
  Drawer,
  NavigationBar,
  NavigationRail,
  Badge,
  Card,
  Swiper,
  Carousel,
  Snackbar,
  Button,
  Fab,
  IconButton,
  SegmentedButton,
  Checkbox,
  Chip,
  Dialog,
  Popover,
  Divider,
  Elevation,
  List,
  ListItem,
  ListGroup,
  ListItemLink,
  Menu,
  MenuItem,
  LinearProgress,
  CircularProgress,
  Radio,
  BottomSheets,
  SideSheets,
  Ripple,
  Select,
  Slider,
  Switch,
  Tabs,
  Table,
  Avatar,
  Pagination,
  TextField,
  Spacer,
  Tooltip,
  DatePicker,
  TimePicker,
  Terminal,
  BeforeAfter,
  Text,
  Slot
} from 'actify'
import DocTabs from './DocTabs'
import PageIcon from '@/pages/Icons'
import PageTheme from '@/pages/Theme'
import { useMDXComponent } from 'next-contentlayer/hooks'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'

const components = {
  h1: ({ ...props }) => (
    <h1 {...props}>
      <a
        href={`#${props.id}`}
        className="group-hover:before:visible before:invisible before:content-['#'] before:text-primary before:mr-1 before:-ml-6"
      >
        {props.children}
      </a>
    </h1>
  ),
  h2: ({ ...props }) => (
    <h2 className="group" {...props}>
      <a
        href={`#${props.id}`}
        className="group-hover:before:visible before:invisible before:content-['#'] before:text-primary before:mr-1 before:-ml-5"
      >
        {props.children}
      </a>
    </h2>
  ),
  h3: ({ ...props }) => <h3 {...props} />,
  h4: ({ ...props }) => <h4 {...props} />,
  p: ({ ...props }) => <p {...props} />,
  a: ({ ...props }) => (
    <a
      target={
        props.href && props.href.startsWith('http') ? '_blank' : undefined
      }
      {...props}
    />
  ),
  ul: ({ ...props }) => <ul {...props} />,
  pre: ({ ...props }) => <SyntaxHighlighter {...props.children.props} />,
  code: ({ ...props }) => (
    <code
      className="leading-8 before:hidden after:hidden bg-black/10 dark:bg-white/10 rounded-md p-1.5"
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr {...props} />,
  table: ({ ...props }) => <table {...props} />,
  tbody: ({ ...props }) => <tbody {...props} />,
  thead: ({ ...props }) => <thead {...props} />,
  tr: ({ ...props }) => <tr {...props} />,
  th: ({ ...props }) => <th className="text-left" {...props} />,
  td: ({ ...props }) => <td {...props} />,
  option: ({ ...props }) => <option {...props} />,
  // Doc Pages
  PageIcon: ({ ...props }) => <PageIcon {...props} />,
  PageTheme: ({ ...props }) => <PageTheme {...props} />,
  // Doc Components
  DocTabs: ({ ...props }) => <DocTabs {...props} />,
  // Actify Components
  Icon: ({ ...props }) => <Icon {...props} />,
  Accordion: ({ ...props }) => <Accordion {...props} />,
  TopAppBar: ({ ...props }) => <TopAppBar {...props} />,
  BottomAppBar: ({ ...props }) => <BottomAppBar {...props} />,
  Drawer: ({ ...props }) => <Drawer {...props} />,
  NavigationBar: ({ ...props }) => <NavigationBar {...props} />,
  NavigationRail: ({ ...props }) => <NavigationRail {...props} />,
  Badge: ({ ...props }) => <Badge {...props} />,
  Card: ({ ...props }) => <Card {...props} />,
  Swiper: ({ ...props }) => <Swiper {...props} />,
  Carousel: ({ ...props }) => <Carousel {...props} />,
  Snackbar: ({ ...props }) => <Snackbar {...props} />,
  Button: ({ ...props }) => <Button {...props} />,
  Fab: ({ ...props }) => <Fab {...props} />,
  IconButton: ({ ...props }) => <IconButton {...props} />,
  SegmentedButton: ({ ...props }) => <SegmentedButton {...props} />,
  Checkbox: ({ ...props }) => <Checkbox {...props} />,
  Chip: ({ ...props }) => <Chip {...props} />,
  Dialog: ({ ...props }) => <Dialog {...props} />,
  Popover: ({ ...props }) => <Popover {...props} />,
  Divider: ({ ...props }) => <Divider {...props} />,
  Elevation: ({ ...props }) => <Elevation {...props} />,
  List: ({ ...props }) => <List {...props} />,
  ListItem: ({ ...props }) => <ListItem {...props} />,
  ListGroup: ({ ...props }) => <ListGroup {...props} />,
  ListItemLink: ({ ...props }) => <ListItemLink {...props} />,
  Menu: ({ ...props }) => <Menu {...props} />,
  MenuItem: ({ ...props }) => <MenuItem {...props} />,
  LinearProgress: ({ ...props }) => <LinearProgress {...props} />,
  CircularProgress: ({ ...props }) => <CircularProgress {...props} />,
  Radio: ({ ...props }) => <Radio {...props} />,
  BottomSheets: ({ ...props }) => <BottomSheets {...props} />,
  SideSheets: ({ ...props }) => <SideSheets {...props} />,
  Ripple: ({ ...props }) => <Ripple {...props} />,
  Select: ({ ...props }) => <Select {...props} />,
  Slider: ({ ...props }) => <Slider {...props} />,
  Switch: ({ ...props }) => <Switch {...props} />,
  Tabs: ({ ...props }) => <Tabs {...props} />,
  Table: ({ ...props }) => <Table {...props} />,
  Avatar: ({ ...props }) => <Avatar {...props} />,
  Pagination: ({ ...props }) => <Pagination {...props} />,
  TextField: ({ ...props }) => <TextField {...props} />,
  Spacer: ({ ...props }) => <Spacer {...props} />,
  Tooltip: ({ ...props }) => <Tooltip {...props} />,
  DatePicker: ({ ...props }) => <DatePicker {...props} />,
  TimePicker: ({ ...props }) => <TimePicker {...props} />,
  Terminal: ({ ...props }) => <Terminal {...props} />,
  BeforeAfter: ({ ...props }) => <BeforeAfter {...props} />,
  Text: ({ ...props }) => <Text {...props} />,
  Slot: ({ ...props }) => <Slot {...props} />
}

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
