# Next.js & React Hooks Documentation

## 📌 Hooks Básicos

### 1. `useState` – Gerenciamento de estado local

```tsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

### 2. `useEffect` – Efeitos colaterais

```tsx
import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/example")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Carregando..."}</div>;
};
```

### 3. `useContext` – Compartilhamento de estado global

```tsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

const Component = () => {
  const theme = useContext(ThemeContext);
  return <p>Tema atual: {theme}</p>;
};
```

---

## 🔥 Hooks Avançados

### 4. `useRef` – Manipulação de elementos DOM

```tsx
import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focar Input</button>
    </div>
  );
};
```

### 5. `useMemo` – Memorização de valores computados

```tsx
import { useMemo, useState } from "react";

const MemoizedValue = () => {
  const [count, setCount] = useState(0);
  const squared = useMemo(() => count * count, [count]);

  return (
    <div>
      <p>Quadrado: {squared}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

### 6. `useCallback` – Memorização de funções

```tsx
import { useCallback, useState } from "react";

const MemoizedFunction = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};
```

---

## 🚀 Hooks Específicos do Next.js

### 7. `useRouter` – Navegação dinâmica

```tsx
import { useRouter } from "next/router";

const Navigate = () => {
  const router = useRouter();
  return <button onClick={() => router.push("/about")}>Ir para About</button>;
};
```

### 8. `usePathname` e `useSearchParams` – Manipulação de URL

```tsx
import { usePathname, useSearchParams } from "next/navigation";

const URLInfo = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  return (
    <div>
      <p>Path: {pathname}</p>
      <p>Filtro: {filter}</p>
    </div>
  );
};
```

### 9. `useSession` – Autenticação com NextAuth.js

```tsx
import { useSession } from "next-auth/react";

const AuthStatus = () => {
  const { data: session } = useSession();
  return (
    <div>{session ? `Logado como ${session.user.name}` : "Não logado"}</div>
  );
};
```

---

## 📜 Conclusão

Esses são os principais **React Hooks** usados no Next.js. Use-os para melhorar a performance e a organização da sua aplicação! 🚀
