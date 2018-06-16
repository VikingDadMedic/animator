import * as React from 'react';
import Palette from './../../Palette';

export default ({color = Palette.ROCK}) => (
    <svg width="11px" height="11px" viewBox="0 0 26 26">
        <g fill={color}>
            <path d="M24.98-.01a1 1 0 0 0-.111.01h-7.87a1 1 0 1 0 0 2h5.586L10.292 14.293a1 1 0 1 0 1.415 1.414L24 3.414V9a1 1 0 1 0 2 0V1.127A1 1 0 0 0 24.98-.01z" />
            <path d="M11 4c-2.496 0-4.382-.004-5.885.166-1.503.17-2.706.527-3.566 1.389C.689 6.416.335 7.617.166 9.119-.003 10.621 0 12.507 0 15c0 2.494-.002 4.38.17 5.883.172 1.503.534 2.704 1.396 3.564.863.86 2.064 1.218 3.565 1.387C6.632 26.004 8.514 26 11 26c2.486 0 4.368.001 5.87-.17 1.5-.17 2.703-.53 3.566-1.39.861-.861 1.22-2.063 1.392-3.565C22 19.373 22 17.49 22 15a1 1 0 1 0-2 0c0 2.487-.009 4.343-.158 5.649-.15 1.306-.425 1.982-.82 2.377-.396.394-1.072.67-2.378.818-1.305.149-3.16.156-5.644.156-2.485 0-4.339-.007-5.645-.154-1.306-.148-1.982-.421-2.377-.815-.394-.393-.67-1.07-.82-2.377C2.008 19.347 2 17.492 2 15s.005-4.349.152-5.656c.147-1.308.421-1.983.813-2.375.392-.392 1.067-.667 2.375-.815C6.648 6.007 8.505 6 11 6a1 1 0 1 0 0-2z" />
        </g>
    </svg>
);