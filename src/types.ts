export interface postItem {
    id: number
    created: number,
    content: string
}

export interface UserDataProps {
    date: number
}

export interface ButtonProps {
    link?: string,
    handler?: (e: React.FormEvent<HTMLButtonElement>) => void,
    children: string,
}

export interface PostDataProps {
    handleCloseBtn: () => void,
    inputRef: React.RefObject<HTMLTextAreaElement>
}