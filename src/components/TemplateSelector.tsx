import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, BarChart3 } from "lucide-react";
import { toast } from "sonner";

interface Template {
  id: string;
  name: string;
  description: string | null;
  chart_type: string;
  is_premium: boolean;
  config: any;
}

interface TemplateSelectorProps {
  onSelectTemplate: (template: Template) => void;
}

export function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("templates")
        .select("*")
        .order("is_premium", { ascending: true })
        .order("name", { ascending: true });

      if (error) throw error;
      setTemplates(data || []);
    } catch (error: any) {
      toast.error("Failed to load templates");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </CardHeader>
            <CardContent>
              <div className="h-3 bg-muted rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Choose a Template</h3>
      {templates.map((template) => (
        <Card
          key={template.id}
          className="cursor-pointer hover:border-primary transition-colors"
          onClick={() => onSelectTemplate(template)}
        >
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              {template.name}
              {template.is_premium && (
                <Crown className="h-3 w-3 text-accent ml-auto" />
              )}
            </CardTitle>
            <CardDescription className="text-xs">
              {template.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary" className="text-xs capitalize">
              {template.chart_type}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
