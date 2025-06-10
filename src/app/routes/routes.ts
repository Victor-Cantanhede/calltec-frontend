import { v4 } from 'uuid';

interface IRoutes {
    id: string;
    title: string;
    subroutes: ISubRoutes[];
    accesslevel: number[];
}

interface ISubRoutes {
    id: string;
    title: string;
    href: string;
}

export const routes: IRoutes[] = [
    {
        id: v4(),
        title: 'Menu',
        subroutes: [
            {
                id: v4(),
                title: 'Chamados',
                href: '/'
            }
        ],
        accesslevel: [1, 2, 3]
    },
    {
        id: v4(),
        title: 'Atendimento',
        subroutes: [
            {
                id: v4(),
                title: 'Chamados',
                href: '/'
            }
        ],
        accesslevel: [2, 3]
    },
    {
        id: v4(),
        title: 'Administração',
        subroutes: [
            {
                id: v4(),
                title: 'Usuários',
                href: '/'
            },
            {
                id: v4(),
                title: 'Departamentos',
                href: '/'
            },
            {
                id: v4(),
                title: 'Categorias',
                href: '/'
            },
            {
                id: v4(),
                title: 'Subcategorias',
                href: '/'
            },
        ],
        accesslevel: [3]
    }
];