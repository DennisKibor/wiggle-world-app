import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, Upload, Eye, Code } from "lucide-react";
import { toast } from "sonner";
import { DataUploader } from "@/components/DataUploader";
import { ChartPreview } from "@/components/ChartPreview";
import { TemplateSelector } from "@/components/TemplateSelector";

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string;
}

export default function Editor() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [chartData, setChartData] = useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  const fetchProject = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .single();

      if (error) throw error;
      
      setProject(data);
      setProjectName(data.name);
      setProjectDescription(data.description || "");
      
      // Fetch datasets and visualizations
      const { data: datasets } = await supabase
        .from("datasets")
        .select("*")
        .eq("project_id", projectId)
        .order("created_at", { ascending: false })
        .limit(1);

      if (datasets && datasets.length > 0) {
        setChartData(datasets[0].data as any[]);
      }
    } catch (error: any) {
      toast.error("Failed to load project");
      navigate("/dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveProject = async () => {
    try {
      const { error } = await supabase
        .from("projects")
        .update({
          name: projectName,
          description: projectDescription,
          updated_at: new Date().toISOString(),
        })
        .eq("id", projectId);

      if (error) throw error;
      toast.success("Project saved!");
    } catch (error: any) {
      toast.error("Failed to save project");
    }
  };

  const handleDataUpload = async (data: any[]) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("datasets")
        .insert({
          project_id: projectId,
          user_id: user.id,
          name: `Dataset ${new Date().toLocaleDateString()}`,
          data: data,
          row_count: data.length,
        });

      if (error) throw error;
      
      setChartData(data);
      toast.success("Data uploaded successfully!");
    } catch (error: any) {
      toast.error("Failed to upload data");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <Input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="text-xl font-bold border-none focus-visible:ring-0 px-0"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button onClick={handleSaveProject}>
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex-1 flex">
        {/* Left Sidebar - Configuration */}
        <aside className="w-96 border-r bg-card/30 overflow-y-auto">
          <Tabs defaultValue="data" className="h-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="config">Config</TabsTrigger>
            </TabsList>

            <TabsContent value="data" className="p-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <DataUploader onDataUpload={handleDataUpload} />
                </CardContent>
              </Card>

              {chartData.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Data Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground">
                      {chartData.length} rows loaded
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="templates" className="p-4">
              <TemplateSelector onSelectTemplate={setSelectedTemplate} />
            </TabsContent>

            <TabsContent value="config" className="p-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Description</label>
                    <Textarea
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Add a description..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </aside>

        {/* Center - Chart Preview */}
        <main className="flex-1 bg-muted/30 overflow-auto">
          <div className="h-full flex items-center justify-center p-8">
            <ChartPreview data={chartData} template={selectedTemplate} />
          </div>
        </main>
      </div>
    </div>
  );
}
