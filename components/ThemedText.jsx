// O componente ThemedText é uma extensão do componente de texto do React Native,
// adiciona suporte a temas de cores e estilos de tipografia predefinidos.

import { Text, StyleSheet } from 'react-native';

// O useThemeColor ´um hook personalizado que provavelmente determina a cor
// com base no tema do sistema (claro ou escuro)
import { useThemeColor } from '@hooks/useThemeColor';

// Define o componente ThemedText.
// Ele aceita várias props, incluindo estilo, cores para temas claro/escuro,
// e um 'type' para estilos predefinidos.
export function ThemedText({
    style, // Estilo extra, que pode sobrescrever os esilos padrão.
    lightColor, // Cor para o tema claro.
    darkColor, // Cor para o tema escuro.
    type = 'default', //Tipo de estilo de texto, com 'default' como padrão.
    ...rest // Coleta as outras props, como 'children' (o texto em si), e as repassa para o componente <Text>.
}) {
    // Usa o hook para obter a cor do texto com base nas cores e no tema atual.
    // Se lightColor e darkColor não forem fornecidos, ele usa a cor padrão 'text'.
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
        // Combina todos os estilos em um array. A ordem é importante para a sobreposição de estilos:
        // 1. A cor dinâmica do tema.
        // 2. O estilo predefinido (ex: 'title', 'link') baseado na prop 'type'.
        // 3. O estilo extra passado pela prop 'style', que tem a maior prioridade.
        style={[
            { color },
            type === 'default' ? styles.default : undefined,
            type === 'title' ? styles.title : undefined,
            type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
            type === 'subtitle' ? styles.subtitle : undefined,
            type === 'link' ? styles.link : undefined,
            style,
        ]}
        // Repassa as demais props para o componente Text nativo.
    )
}