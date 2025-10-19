# Resume Builder

A modern, interactive resume builder built with Next.js 14, React 18, and TypeScript. Create professional resumes with drag-and-drop functionality, customizable themes, and real-time preview.

## 🚀 Features

### Core Functionality

- **Interactive Resume Builder**: Build your resume with an intuitive, user-friendly interface
- **Real-time Preview**: See your changes instantly as you edit
- **Drag-and-Drop Reordering**: Easily rearrange resume sections by dragging and dropping
- **Multiple Resume Sections**: Include all essential sections for a comprehensive resume

### Resume Sections

The builder supports the following sections:

1. **Title Section**: Personal information including name, title, and contact details
2. **Social Handles**: Add links to your professional social media profiles
3. **Education**: Academic qualifications with institutions, dates, and scores
4. **Work Experience**: Professional experience with company details, roles, and descriptions
5. **Projects**: Showcase your projects with organization, dates, and detailed descriptions
6. **Achievements**: Highlight awards and recognitions
7. **Activities**: Include extracurricular activities and involvement
8. **Skills**: Display your technical and professional skills in organized categories

### Customization Options

- **5 Theme Colors**: Choose from Black, Orange, Dark Red, Dark Blue, or Dark Green
- **Flexible Section Management**: Add or remove sections as needed
- **Customizable Content**: Edit all section details with rich text support
- **Section Reordering**: Drag sections to arrange them in your preferred order

### User Experience

- **Edit Mode**: Click on any section to edit its content
- **Preview Mode**: Switch to preview mode for a cleaner view
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Modern UI**: Clean, professional interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.4
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.3.0
- **Drag & Drop**: @hello-pangea/dnd 17.0.0
- **Icons**: React Icons 5.4.0
- **Font**: Montserrat (Google Fonts)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000/resume-builder](http://localhost:3000/resume-builder)

## 🎯 Usage

### Creating Your Resume

1. **Select Sections**: Click on the section cards at the top to add them to your resume
2. **Edit Content**: Click on any section in the preview to open the edit panel
3. **Add Details**: Fill in your information in the respective fields
4. **Reorder Sections**: Drag and drop sections to arrange them in your preferred order
5. **Choose Theme**: Select a color theme from the theme picker
6. **Preview**: Toggle between edit and preview modes

### Editing Sections

- **Click to Edit**: Click on any section in the preview area
- **Edit Panel**: The edit panel opens on the right side
- **Multiple Entries**: Add multiple entries for sections like work experience, projects, education, etc.
- **Save Changes**: Changes are saved automatically and reflected in real-time

### Theme Customization

- **Color Picker**: Located at the top of the page
- **5 Available Themes**: Black, Orange, Dark Red, Dark Blue, Dark Green
- **Instant Preview**: Theme changes apply immediately to your resume

## 📁 Project Structure

```
src/
├── app/
│   ├── resume-builder/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
└── components/
    ├── common/
    │   ├── Navbar.tsx
    │   └── ...
    └── resume-builder/
        ├── ResumeBuilderHome.tsx
        ├── SectionSelectionCards.tsx
        ├── ThemeChangingNavbar.tsx
        ├── components/
        │   ├── edit-panel/
        │   │   ├── EditPanel.tsx
        │   │   ├── TitleEditBox.tsx
        │   │   ├── SocialHandlesEditBox.tsx
        │   │   ├── EducationEditBox.tsx
        │   │   ├── WorkExperienceEditBox.tsx
        │   │   ├── ProjectsEditBox.tsx
        │   │   ├── AchievementsEditBox.tsx
        │   │   ├── ActivitiesEditBox.tsx
        │   │   └── SkillsEditBox.tsx
        │   ├── resume-preview/
        │   │   ├── Resume.tsx
        │   │   ├── Title.tsx
        │   │   ├── SocialHandles.tsx
        │   │   ├── Education.tsx
        │   │   ├── WorkExperience.tsx
        │   │   ├── Projects.tsx
        │   │   ├── Achievements.tsx
        │   │   ├── Activities.tsx
        │   │   └── Skills.tsx
        │   └── wrappers/
        │       ├── AccordionContainer.tsx
        │       ├── DraggableWrapper.tsx
        │       └── EditableWrapper.tsx
        ├── context/
        │   ├── LayoutContext.tsx
        │   ├── ResumeDataContext.tsx
        │   └── ResumeThemeContext.tsx
        ├── config/
        │   ├── section-name-config.ts
        │   └── theme-config.ts
        └── types/
            ├── layout.ts
            ├── resume-data.ts
            └── theme.ts
```

## 🎨 Key Components

### Context Providers

- **ResumeDataContext**: Manages all resume data and state
- **ResumeThemeContext**: Handles theme color selection
- **LayoutContext**: Controls display mode and section ordering

### Edit Panel Components

Each section has a dedicated edit box component that provides:

- Form fields for all section-specific data
- Add/remove functionality for multiple entries
- Input validation and formatting

### Preview Components

Each section has a corresponding preview component that renders:

- Formatted display of the data
- Professional styling
- Consistent layout across all sections

## 🔧 Configuration

### Theme Configuration

Themes are defined in `src/components/resume-builder/config/theme-config.ts`:

```typescript
export const themeColors = {
  black: '#000000',
  orange: '#FF5722',
  darkRed: '#8B0000',
  darkBlue: '#00008B',
  darkGreen: '#006400',
} as const;
```

### Section Configuration

Section names and titles are managed in `src/components/resume-builder/config/section-name-config.ts`:

```typescript
export const SectionIdTitleMapping = {
  '': '',
  title: 'Title',
  socialHandles: 'Social Handles',
  education: 'Education',
  workExperience: 'Work Experience',
  projects: 'Projects',
  achievements: 'Achievements',
  activities: 'Activities',
  skills: 'Skills',
} as const;
```

## 🚀 Build & Deploy

### Build for Production

```bash
yarn build
# or
npm run build
```

### Start Production Server

```bash
yarn start
# or
npm start
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with one click

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Drag and drop powered by [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Happy Resume Building! 🎉**
