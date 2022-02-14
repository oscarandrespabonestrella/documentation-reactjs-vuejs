import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "../pages/home.vue";
import GettingStartedComponent from "../pages/getting-started.vue";
import TemplatesComponent from "../pages/templates.vue";
import ContactComponent from "../pages/contact.vue";
import AccessibilityComponent from "../pages/accessibility.vue";
import ChangelogComponent from "../pages/changelog.vue";
import BreadcrumbsComponent from "../pages/components/breadcrumbs.vue";
import ButtonsComponent from "../pages/components/buttons.vue";
import CardsComponent from "../pages/components/cards.vue";
import CollapseComponent from "../pages/components/collapse.vue";
import DatepickerComponent from "../pages/components/datepicker.vue";
import FlagsComponent from "../pages/components/flags.vue";
import FormComponent from "../pages/components/form.vue";
import GridComponent from "../pages/components/grid.vue";
import ModalComponent from "../pages/components/modal.vue";
import NavsComponent from "../pages/components/navs.vue";
import NotificationComponent from "../pages/components/notification.vue";
import PaginationComponent from "../pages/components/pagination.vue";
import PopoverComponent from "../pages/components/popover.vue";
import TableComponent from "../pages/components/table.vue";
import TabsComponent from "../pages/components/tabs.vue";

const routes: any[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/getting-started',
        name: 'Getting Started',
        component: GettingStartedComponent
    },
    {
        path: '/templates',
        name: 'Templates',
        component: TemplatesComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    },
    {
        path: '/accessibility',
        name: 'Accessibility',
        component: AccessibilityComponent
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactComponent
    },
    {
        path: '/changelog',
        name: 'Changelog',
        component: ChangelogComponent
    },
    {
        path: '/breadcrumbs',
        name: 'Breadcrumbs',
        component: BreadcrumbsComponent
    },
    {
        path: '/buttons',
        name: 'Buttons',
        component: ButtonsComponent
    },
    {
        path: '/card',
        name: 'Cards',
        component: CardsComponent
    },
    {
        path: '/collapse',
        name: 'Collapse',
        component: CollapseComponent
    },
    {
        path: '/datepicker',
        name: 'Datepicker',
        component: DatepickerComponent
    },
    {
        path: '/flags',
        name: 'Flags',
        component: FlagsComponent
    },
    {
        path: '/form',
        name: 'Forms',
        component: FormComponent
    },
    {
        path: '/grid',
        name: 'Grid and Aligments',
        component: GridComponent
    },
    {
        path: '/modal',
        name: 'Modal',
        component: ModalComponent
    },
    {
        path: '/navs',
        name: 'Navs',
        component: NavsComponent
    },
    {
        path: '/notification',
        name: 'Notifications',
        component: NotificationComponent
    },
    {
        path: '/pagination',
        name: 'Pagination',
        component: PaginationComponent
    },
    {
        path: '/popover',
        name: 'Popover',
        component: PopoverComponent
    },
    {
        path: '/table',
        name: 'Table',
        component: TableComponent
    },
    {
        path: '/tabs',
        name: 'Tabs',
        component: TabsComponent
    },

];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;