import { it, expect, describe, vi, beforeEach } from "vitest";
import { Product } from "./Product";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-even  t";
import axios from 'axios';

vi.mock('axios');

describe('Product component', () => {
    let product;
    let loadCartItems;

    beforeEach(() => {
        product = {
            id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
            image: "images/products/artistic-bowl-set-6-piece.jpg",
            name: "Artistic Bowl and Plate Set - 6 Pieces",
            rating: {
                stars: 5,
                count: 679
            },
            priceCents: 3899,
            keywords: ["bowls set", "kitchen"]
        };
        loadCartItems = vi.fn();
    });

    it('Displays the product detail correctly', () => {
        render(<Product product={product} loadCartItems={loadCartItems} />);

        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText('$38.99')).toBeInTheDocument();
        expect(screen.getByTestId('product-image')).toHaveAttribute('src', product.image);
        expect(screen.getByTestId('product-rating-stars-image')).toHaveAttribute('src', `images/ratings/rating-${product.rating.stars * 10}.png`);
        expect(screen.getByText('679')).toBeInTheDocument();
    });

    it('Add product to the cart', async () => {
        const loadCartItems = vi.fn();
        render(<Product product={product} loadCartItems={loadCartItems} />);

        const user = userEvent.setup();
        const addToCartButton = screen.getByTestId('add-to-cart-button');
        await user.click(addToCartButton);

        expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
            productId: product.id,
            quantity: 1
        });
        expect(loadCartItems).toHaveBeenCalled();
    });
});
