# Corporate Content Schema

## About Page Data (from hakkimizda.json)

```typescript
export interface AboutPageContent {
  title: string;
  description: string;
  content: string; // Markdown content with company history
  scrapedAt: string;
}
```

**Source Data:**
```json
{
  "title": "Hakkımızda",
  "content": "Hakkımızda\\n===========\\n\\nSuntek İleri Teknolojiler A.Ş. 2004 yılında kurulmuştur..."
}
```

## Company Info (from sirketbilgileri.json)

```typescript
export interface CompanyInfo {
  companyType: string; // "A.Ş."
  mersis: string;
  tradeRegistry: string;
  tradeRegistryNumber: string;
  tradeName: string;
  address: string;
  capitalPledged: string;
  capitalPaid: string;
  registrationDate: string;
  taxOffice: string;
  taxNumber: string;
  sector: string;
  phone: string;
  fax: string;
  website: string;
  boardChairman: {
    name: string;
    cv: string;
  };
}
```

**Source Data Extract:**
- Mersis: `0784062408300001`
- Tax Office: `İSTANBUL – KOZYATAĞI Vergi Dairesi`
- Tax Number: `7840624083`
- Phone: `02162322230`
- Address: `Küçükbakkalköy Mah. KocaSinan Cad Selvili Sok No:2/68 ATAŞEHİR/ İSTANBUL`
- Board Chairman: `Ali Afşin Surlu`

## Contact Page (from contact.json)

```typescript
export interface ContactPageContent {
  title: string; // "İletişim"
  description: string;
  headquarters: {
    name: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
  };
  financeOffice?: {
    address: string;
    phone: string;
  };
  taxInfo: {
    taxOffice: string;
    taxNumber: string;
  };
  tradeRegistry: string;
  mapCoordinates?: {
    lat: number;
    lng: number;
  };
}
```

**Source Data:**
- **HQ Address:** Küçükbakkalköy Mah. Kocasinan Cad. Selvili Sok, Canan Business Center No:4 K:10 D:68 34755 Ataşehir / İstanbul
- **Finance Office:** Küçükbakkalköy Mah. Kayışdağı Cad Serdar Sok No:2/8 34755 Ataşehir / İstanbul
- **Phone:** 0216 232 22 30
- **Email:** info@suntek.com.tr
- **Tax Office:** İstanbul – Kozyatağı Vergi Dairesi
- **Tax Number:** 7840624083
- **Trade Registry:** 258257-5

## HR/Careers (from insankaynaklari.json, insankaynaklari-kariyer.json)

```typescript
export interface CareersPageContent {
  title: string;
  description: string;
  content: string; // Markdown with HR policies, benefits
  jobListings?: JobListing[];
}

export interface JobListing {
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Part-time, etc.
  description: string;
  requirements: string[];
  postedDate: string;
}
```

---

## Implementation Plan

### Step 1: Extend Schema
Add to `src/content/schema.ts`:
- `AboutPageContent`
- `CompanyInfo`  
- `ContactPageContent`
- `CareersPageContent`

### Step 2: Create Content Files
- `src/content/pages/about.ts` - merge hakkimizda + sirketbilgileri
- `src/content/pages/contact.ts` - from contact.json
- `src/content/pages/careers.ts` - from insankaynaklari*.json

### Step 3: Update Page Components
- `src/app/about/page.tsx` - use content provider
- `src/app/contact/page.tsx` - use content provider  
- `src/app/careers/page.tsx` - create from scratch

### Step 4: Verification
- Verify all text matches source JSONs
- No hardcoded strings remain
- Build passes
