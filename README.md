# Hotel Hopper

![logo](https://github.com/user-attachments/assets/c2be707e-51cd-4e78-b3e6-5ca924fc3be4)



Hotel Hopper is a modern, full-featured hotel booking platform built with Next.js. This application allows users to search for hotels, view detailed information, make bookings, and manage their profile and reservations.

## Features

- 🏨 Browse hotel listings with detailed information
- 🔍 Search functionality with filters
- 🌙 Dark/light mode toggle
- 👤 User authentication
- 📅 Booking management system
- 💳 Checkout process
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js App Router
- 🎨 Beautiful UI with shadcn/ui components

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Fonts**: Google Fonts (Cabin, Inter)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/hotel-hopper.git
cd hotel-hopper
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn
# or
pnpm install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
hotel-hopper/
├── app/                    # Next.js App Router
│   ├── checkout/           # Checkout page
│   ├── hotels/             # Hotel listings and details
│   ├── profile/            # User profile
│   ├── sign-in/            # Authentication
│   ├── sign-up/            # Authentication
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── loading.tsx         # Loading UI
│   ├── not-found.tsx       # 404 page
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── auth/               # Authentication components
│   ├── ui/                 # UI components (shadcn)
│   ├── booking-form.tsx    # Booking form
│   ├── footer.tsx          # Footer
│   ├── header.tsx          # Header
│   └── ...                 # Other components
├── lib/                    # Utility functions
│   ├── fonts.ts            # Font configuration
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   └── logo.svg            # Logo
└── ...                     # Config files
\`\`\`

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts` and global styles in `app/globals.css`.

### Adding Authentication

To add real authentication:

1. Set up an authentication provider like [NextAuth.js](https://next-auth.js.org/) or [Supabase Auth](https://supabase.com/auth)
2. Update the sign-in and sign-up components in the `components/auth` directory
3. Create protected routes and authentication context

### Adding a Database

To add a database for storing hotel and booking information:

1. Set up a database (PostgreSQL, MySQL, MongoDB, etc.)
2. Create a connection using an ORM like Prisma or Drizzle
3. Update the mock data in components to fetch from your database

## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import your project to Vercel
3. Vercel will detect Next.js automatically and use the optimal build settings

### Other Deployment Options

You can also deploy to other platforms like Netlify, AWS, or your own server. Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more information.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`bash
# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Authentication (when implemented)
# AUTH_SECRET=your_auth_secret
# NEXTAUTH_URL=http://localhost:3000

# Database (when implemented)
# DATABASE_URL=your_database_connection_string

# Payment Processing (when implemented)
# STRIPE_PUBLIC_KEY=your_stripe_public_key
# STRIPE_SECRET_KEY=your_stripe_secret_key
\`\`\`

## API Routes

The project uses Next.js API routes for server-side functionality. Here are the main endpoints:

### Hotels API

- `GET /api/hotels` - Get all hotels with optional filtering
- `GET /api/hotels/:id` - Get details for a specific hotel

### Bookings API

- `GET /api/bookings` - Get user's bookings
- `POST /api/bookings` - Create a new booking
- `DELETE /api/bookings/:id` - Cancel a booking

### User API

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/saved-hotels` - Get user's saved hotels
- `POST /api/user/saved-hotels` - Save a hotel
- `DELETE /api/user/saved-hotels/:id` - Remove a saved hotel

## Testing

### Running Tests

\`\`\`bash
npm run test
# or
yarn test
# or
pnpm test
\`\`\`

### Test Structure

- Unit tests are located next to the components they test
- Integration tests are in the `__tests__` directory
- E2E tests use Playwright and are in the `e2e` directory

## Performance Optimization

The project includes several performance optimizations:

1. **Image Optimization**: Using Next.js Image component for automatic image optimization
2. **Code Splitting**: Automatic code splitting by Next.js
3. **Font Optimization**: Using `next/font` for optimized font loading
4. **Server Components**: Using React Server Components where appropriate to reduce client-side JavaScript

Additional optimizations you can implement:

1. **Implement ISR (Incremental Static Regeneration)** for hotel listing pages
2. **Add caching headers** for static assets
3. **Lazy load below-the-fold components** using `next/dynamic`

## Troubleshooting

### Common Issues

#### Build Errors

If you encounter build errors related to missing modules:

\`\`\`bash
npm install --force
# or
yarn install --force
\`\`\`

#### API Routes Not Working

Make sure your environment variables are set correctly and you're using the correct API endpoints.

#### Styling Issues

If styles are not applying correctly:

1. Make sure Tailwind is properly configured
2. Check for conflicting class names
3. Verify that the correct theme is being applied

### Debugging

For detailed debugging:

\`\`\`bash
npm run dev -- --debug
# or
yarn dev --debug
# or
pnpm dev --debug
\`\`\`

## Roadmap

Future features planned for Hotel Hopper:

- [ ] Integration with real hotel booking APIs
- [ ] User reviews and ratings system
- [ ] Advanced search with map view
- [ ] Loyalty program
- [ ] Mobile app using React Native
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Email notifications for bookings

## Browser Support

Hotel Hopper is optimized for the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security

The application implements several security best practices:

- CSRF protection
- Content Security Policy
- XSS protection
- Rate limiting on API routes
- Input validation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Hotel images: [Unsplash](https://unsplash.com/)
- UI inspiration: [Airbnb](https://airbnb.com)
- Icons: [Lucide React](https://lucide.dev/)
- UI Components: [shadcn/ui](https://ui.shadcn.com/)

---

Made with ❤️ by Allen Amaya
